import LinkedList from '../LinkedList';

describe('LindedList', () => {
    it('should create empty linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toBe('');
    })
})