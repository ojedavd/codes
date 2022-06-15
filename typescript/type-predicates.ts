interface Card {
    balance: number;
}

interface Debit extends Card {
    level: string;
}

interface Credit extends Card {
    creditLimit: number;
}

function isCreditCard(card: Credit | Debit): card is Credit {
    return 'creditLimit' in card;
}

function checkout(card: Credit | Debit, amount: number): void {
    if (isCreditCard(card)) {
        // (card as Credit).creditLimit
        if (amount > card.creditLimit) {
            throw new Error('you are exceding the credit limit');
        }
    }
}