export interface IObject {
  [key: string]: any
}

export interface ICountryCode {
  countryCode: number,
  countryName: string
}

export interface IResponse<T> {
  message: string,
  result: T
}

export interface IUserData {
  firstName: string,
  lastName: string,
  passportNumber: string
}

export interface IBankAccount {
  accountNumber: string,
  accountType: string,
  balance: string,
  currency: string,
  showAccountNumber?: boolean,
  showBalance?: boolean
}

export interface IAdditionalData {
  description: string
}

export interface IAllData {
  userData: IUserData | null,
  bankAccounts: IBankAccount[] | null,
  additionalData: IAdditionalData | null,
  transactions: any
}
