'use client'

import { EMPTY_VENDOR, STATE_OPTIONS, SUPPLY_OPTIONS, vendorErrors } from '@/lib/leads'
import { CLAIM_URL } from '@/lib/suppliers'
import { ChipsField, SelectField, TextAreaField, TextField } from './fields'
import { FormCard, FormHeading, PrivacyNote, Sent, SubmitRow, Trap } from './LeadFormParts'
import { useLeadForm } from './useLeadForm'

/**
 * "Get listed on the marketplace" (/vendors): a supplier or service company says who they are,
 * what they supply and where. Sent to the API (lib/leads `sendLead`), which emails Fork's team.
 * The website, the delivery area and the note are optional.
 */
export default function VendorApplicationForm() {
  const { values, set, errors, status, failure, submit, trap } = useLeadForm('vendor', EMPTY_VENDOR, vendorErrors)

  if (status === 'sent')
    return (
      <FormCard>
        <Sent
          title={`Thanks, ${values.firstName.trim()}. We have your details.`}
          text={
            <>
              We will write to <span className="font-medium text-warm-950">{values.email.trim()}</span> about getting {values.organization.trim()} listed.
            </>
          }
          links={[
            { label: 'See how the storefront works', href: '/storefront' },
            { label: 'Browse the supplier directory', href: '/suppliers' },
            { label: 'Set up your seller account now', href: CLAIM_URL, external: true },
          ]}
        />
      </FormCard>
    )

  return (
    <FormCard>
      <FormHeading title="Tell us about your business" note="It takes about a minute." />
      <form onSubmit={submit} noValidate className="relative">
        <Trap inputRef={trap} />
        <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
          <TextField
            id="organization"
            label="Business name"
            autoComplete="organization"
            maxLength={120}
            value={values.organization}
            onChange={(v) => set('organization', v)}
            error={errors.organization}
          />
          <TextField
            id="website"
            label="Website"
            optional
            inputMode="url"
            autoComplete="url"
            placeholder="yourbusiness.com"
            maxLength={200}
            value={values.website}
            onChange={(v) => set('website', v)}
            error={errors.website}
          />
          <TextField id="firstName" label="First name" autoComplete="given-name" maxLength={60} value={values.firstName} onChange={(v) => set('firstName', v)} error={errors.firstName} />
          <TextField id="lastName" label="Last name" autoComplete="family-name" maxLength={60} value={values.lastName} onChange={(v) => set('lastName', v)} error={errors.lastName} />
          <TextField
            id="email"
            label="Work email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            maxLength={200}
            value={values.email}
            onChange={(v) => set('email', v)}
            error={errors.email}
          />
          <TextField id="phone" label="Phone number" type="tel" inputMode="tel" autoComplete="tel" maxLength={40} value={values.phone} onChange={(v) => set('phone', v)} error={errors.phone} />
          <ChipsField
            id="categories"
            label="What do you supply?"
            hint="Pick all that apply"
            options={SUPPLY_OPTIONS}
            value={values.categories}
            onChange={(v) => set('categories', v)}
            error={errors.categories}
            className="sm:col-span-2"
          />
          <SelectField
            id="state"
            label="Primary state"
            placeholder="Select a state"
            autoComplete="address-level1"
            options={STATE_OPTIONS}
            value={values.state}
            onChange={(v) => set('state', v)}
            error={errors.state}
          />
          <TextField
            id="deliveryArea"
            label="Where do you deliver?"
            optional
            placeholder="Brooklyn and Queens"
            maxLength={200}
            value={values.deliveryArea}
            onChange={(v) => set('deliveryArea', v)}
            error={errors.deliveryArea}
          />
          <TextAreaField
            id="note"
            label="Anything else we should know?"
            optional
            maxLength={1000}
            value={values.note}
            onChange={(v) => set('note', v)}
            error={errors.note}
            className="sm:col-span-2"
          />
        </div>
        <SubmitRow label="Send" sending={status === 'sending'} failure={failure} note={<PrivacyNote lead="We will reply by email." />} />
      </form>
    </FormCard>
  )
}
