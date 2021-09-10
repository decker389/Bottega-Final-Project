import { useState } from "react";

export default function AccountCreationForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [bankAccountName, setBankAccountName] = useState("");
    const [bankAccountType, setBankAccountType] = useState("");
    const [bankRoutingNumber, setBankRoutingNumber] = useState("");
    const [bankAccountNumber, setBankAccountNumber] = useState("");

    return (

        <form className="creation-form">
            <div className="creation-form__first-name">
                <label>First Name:</label>
                <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>

            <div className="creation-form__last-name">
                <label>Last Name:</label>
                <input name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>

            <div className="creation-form__email">
                <label>Email Address:</label>
                <input name="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
            </div>

            <div className="creation-form__password">
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className="creation-form-middle-border">
                <p>First Name, Last Name, Email Address, and Password are required. You can add your bank account information latter.</p>
            </div>

            <div className="creation-form__bank-account-info">
                <div className="creation-form__bank-account-info__bank-account-name">
                    <label>Bank Account Name:</label>
                    <input name="bankAccountName" value={bankAccountName} onChange={(e) => setBankAccountName(e.target.value)} />
                </div>

                <div className="creation-form__bank-account-info__bank-account-type">
                    <label>Bank Account Type:</label>
                    <select value={bankAccountType} onChange={(e) => setBankAccountType(e.target.value)}>
                        <option value="Checking">Checking</option>
                        <option value="Savings">Savings</option>
                    </select>
                </div>

                <div className="creation-form__bank-account-info__bank-account-routing-number">
                    <label>Bank Routing Number:</label>
                    <input name="bankRoutingNumber" value={bankRoutingNumber} onChange={(e) => setBankRoutingNumber(e.target.value)} />
                </div>

                <div className="creation-form__bank-account-info__bank-account-number">
                    <label>Bank Account Number:</label>
                    <input name="bankAccountNumber" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} />
                </div>

            </div>

            <div className='submit-button'>
                <input type="submit" value="Create Account" />
            </div>

        </form>
    )
}