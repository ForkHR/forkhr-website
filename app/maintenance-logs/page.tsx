import { redirect } from 'next/navigation'

export default function MaintenanceLogsRedirect() {
  redirect('/features#maintenance-logs')
}
