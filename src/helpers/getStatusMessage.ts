export const statuses: string[] = ['read', 'received', 'send']

export const getStatus = (status: string): string => {
  switch (status) {
    case 'read':
      return 'status--read'
    case 'received':
      return 'status--received'
    default:
      return ''
  }
}
