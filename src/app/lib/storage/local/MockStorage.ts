export class MockStorage {
    private store: { [key: string]: string } = {};
    setItem(key: string, value: string) {
        this.store[key] = value;
    }
    getItem(key: string): string | null {
        return this.store[key] || null;
    }
    removeItem(key: string) {
        delete this.store[key];
    }
    clear() {
        this.store = {};
    }
}
