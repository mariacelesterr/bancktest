export interface Transactions {
    categoryCode: string,
    dates: {
        valueDate: Date
    },
    transaction: {
        amountCurrency: {
            amount: string,
            currencyCode: string
        },
        type: string,
        creditDebitIndicator:string
    },
    merchant: {
        name: string,
        accountNumber: string 
    }, 
}