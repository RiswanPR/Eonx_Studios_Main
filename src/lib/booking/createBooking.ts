export interface BookingContext {
  leadId: string;
  email: string;
}

export async function createBookingContext(context: BookingContext) {
  return {
    ready: true,
    leadId: context.leadId,
  };
}
