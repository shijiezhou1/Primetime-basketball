<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.mindset.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.mindset.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.mindset.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="text-2xl">
          {{ $t('pages.mindset.just_blank_page_with_title') }}
        </div>
      </PageSection>

      <PageSection>
        <div class="flex items-center justify-center">
          <img class="w-4/12" src="https://i.imgur.com/9c4uDHJ.jpg" alt="iq" />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
