import { redirect } from 'next/navigation'

export default function MaintenanceLogsRedirect() {
  redirect('/products#maintenance-logs')
}
