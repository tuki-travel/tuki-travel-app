class ContainerC {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private dependencies: Record<string, unknown> = {};
  private static instance: ContainerC;

  static getInstance(): ContainerC {
    if (!ContainerC.instance) {
      ContainerC.instance = new ContainerC();
    }
    return ContainerC.instance;
  }

  register<T>(name: string, dependency: T): void {
    if (!this.dependencies[name]) this.dependencies[name] = dependency;
  }

  resolve<T>(name: string): T {
    return this.dependencies[name] as T;
  }
}
export const Container = ContainerC.getInstance();
