import React, { useState } from 'react';
import styled from 'styled-components';

const TransactionForm = () => {

return (
    <FormContainer>
        <Title>Effectuer une Transaction</Title>
        
        <InputContainer>
        <InputLabel>Nom de la transaction</InputLabel>
        <Input
            type="text"
            placeholder="Nom de la transaction"
            className="transName"
        />
        </InputContainer>

        <InputContainer>
        <InputLabel>Montant</InputLabel>
        <Input
            type="number"
            placeholder="Montant de la transaction"
            className="transValue"
        />
        </InputContainer>

        <InputContainer>
        <InputLabel>Description</InputLabel>
        <Input
            type="text"
            placeholder="Description de la transaction"
            className="transDesc"
        />
        </InputContainer>

        <Button onClick={setToLocalStorage}>Effectuer la Transaction</Button>
    </FormContainer>
);
};

function setToLocalStorage() {
    const transactionName = document.querySelector('.transName');
    const transactionValue = document.querySelector('.transValue');
    const transactionDesc = document.querySelector('.transDesc');

    if (transactionName.value == "" || transactionValue.value == "" || transactionDesc.value == ""){
        window.alert('Transaction échoué, un argument est manquant.');
    } else {
        let numberOfTransaction = parseInt(localStorage.getItem('transaction_number')) || 0;
        numberOfTransaction++;
        localStorage.setItem('transaction_number', numberOfTransaction);
    
        localStorage.setItem('transactions', (localStorage.getItem('transactions') || "") + `${numberOfTransaction}:name_${transactionName.value}_value_${transactionValue.value}_desc_${transactionDesc.value}-`);
        transactionName.value = "";
        transactionValue.value = "";
        transactionDesc.value = "";

        window.location.reload();
    }
}

export default TransactionForm;


const FormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    box-sizing: border-box;
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
`;

const InputContainer = styled.div`
    margin-bottom: 20px;
`;

const InputLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-top: 5px;
    box-sizing: border-box;

    &:focus {
    outline: none;
    border-color: #4CAF50;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-sizing: border-box;

    &:hover {
        background-color: #45a049;
    }
`;

