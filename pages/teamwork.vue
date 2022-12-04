<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.teamwork.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.teamwork.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.teamwork.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="text-2xl">
          {{ $t('pages.teamwork.just_blank_page_with_title') }}
        </div>
      </PageSection>

      <PageSection>
        <div class="flex items-center justify-center">
          <img
            class="sm:w-full md:w-4/12"
            src="@/assets/images/basketballteam1.jpeg"
            alt="iq"
          />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
