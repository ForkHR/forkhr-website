'use client'

import { BUSINESS_TYPE_OPTIONS, EMPTY_DEMO, LOCATION_OPTIONS, STATE_OPTIONS, demoErrors } from '@/lib/leads'
import { REGISTER_URL } from '@/lib/site'
import { SelectField, TextField } from './fields'
import { FormCard, FormHeading, PrivacyNote, Sent, SubmitRow, Trap } from './LeadFormParts'
import { useLeadForm } from './useLeadForm'

/**
 * "Request a demo" (/demo): eight fields, all required, sent to the API (lib/leads `sendLead`),
 * which emails Fork's team. Once sent the card says what happens next.
 */
export default function DemoRequestForm() {
  const { values, set, errors, status, failure, submit, trap } = useLeadForm('demo', EMPTY_DEMO, demoErrors)

  if (status === 'sent')
    return (
      <FormCard>
        <Sent
          title={`Thanks, ${values.firstName.trim()}. Your request is in.`}
          text={
            <>
              We will email you at <span className="font-medium text-warm-950">{values.email.trim()}</span> to set up a time.
            </>
          }
          links={[
            { label: 'See everything Fork does', href: '/products' },
            { label: 'Look at pricing', href: '/pricing' },
            { label: 'Start on the Free plan meanwhile', href: REGISTER_URL, external: true },
          ]}
        />
      </FormCard>
    )

  return (
    <FormCard>
      <FormHeading title="Request a demo" note="All fields are required." />
      <form onSubmit={submit} noValidate className="relative">
        <Trap inputRef={trap} />
        <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
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
            className="sm:col-span-2"
          />
          <TextField id="firstName" label="First name" autoComplete="given-name" maxLength={60} value={values.firstName} onChange={(v) => set('firstName', v)} error={errors.firstName} />
          <TextField id="lastName" label="Last name" autoComplete="family-name" maxLength={60} value={values.lastName} onChange={(v) => set('lastName', v)} error={errors.lastName} />
          <TextField id="phone" label="Phone number" type="tel" inputMode="tel" autoComplete="tel" maxLength={40} value={values.phone} onChange={(v) => set('phone', v)} error={errors.phone} />
          <TextField
            id="organization"
            label="Organization name"
            autoComplete="organization"
            maxLength={120}
            value={values.organization}
            onChange={(v) => set('organization', v)}
            error={errors.organization}
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
          <SelectField id="locations" label="Total locations" placeholder="How many?" options={LOCATION_OPTIONS} value={values.locations} onChange={(v) => set('locations', v)} error={errors.locations} />
          <SelectField
            id="businessType"
            label="Business type"
            placeholder="Select a type"
            options={BUSINESS_TYPE_OPTIONS}
            value={values.businessType}
            onChange={(v) => set('businessType', v)}
            error={errors.businessType}
            className="sm:col-span-2"
          />
        </div>
        <SubmitRow label="Request a demo" sending={status === 'sending'} failure={failure} note={<PrivacyNote lead="We will reply by email to set up a time." />} />
      </form>
    </FormCard>
  )
}
