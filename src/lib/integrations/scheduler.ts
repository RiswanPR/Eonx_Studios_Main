export interface SchedulerProvider {
  createSession(leadId: string): Promise<{ url?: string; ready: boolean }>;
}

export class DevelopmentSchedulerProvider implements SchedulerProvider {
  async createSession(leadId: string): Promise<{ url?: string; ready: boolean }> {
    return {
      ready: true,
      url: `/book-a-call/schedule?leadId=${encodeURIComponent(leadId)}`,
    };
  }
}

export const defaultSchedulerProvider: SchedulerProvider =
  new DevelopmentSchedulerProvider();
