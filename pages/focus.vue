<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.focus.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.focus.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.focus.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="text-2xl">
          {{ $t('pages.focus.just_blank_page_with_title') }}
        </div>
      </PageSection>

      <PageSection>
        <div class="flex items-center justify-center">
          <img
            class="sm:w-full md:w-4/12"
            src="https://i.imgur.com/o20tswE.jpg"
            alt="iq"
          />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
