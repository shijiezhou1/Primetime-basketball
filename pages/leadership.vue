<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.leadership.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.leadership.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.leadership.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="text-2xl">
          {{ $t('pages.leadership.just_blank_page_with_title') }}
        </div>
      </PageSection>

      <PageSection>
        <div class="flex items-center justify-center">
          <img
            class="sm:w-full md:w-4/12"
            src="@/assets/images/basketball-solo.jpeg"
            alt="iq"
          />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
