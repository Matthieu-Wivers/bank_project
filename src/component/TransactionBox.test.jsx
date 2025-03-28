import { render, fireEvent, screen } from '@testing-library/react';
import TransactionForm from './TransactionForm';

describe('TransactionForm', () => {
    beforeEach(() => {
        // Clear localStorage before each test to ensure no persistence issues
        localStorage.clear();
    });

    it('renders the form with the correct fields', () => {
        render(<TransactionForm />);

        // Vérifier si les champs du formulaire sont présents
        expect(screen.getByPlaceholderText(/Nom de la transaction/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Montant de la transaction/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Description de la transaction/i)).toBeInTheDocument();
    });

    it('displays an alert when the form is submitted with empty fields', () => {
        render(<TransactionForm />);

        // Mocking window.alert
        window.alert = jest.fn();

        // Trouver et cliquer sur le bouton de soumission
        const button = screen.getByText(/Effectuer la Transaction/i);
        fireEvent.click(button);

        // Vérifier si window.alert a été appelé
        expect(window.alert).toHaveBeenCalledWith('Transaction échoué, un argument est manquant.');
    });

    it('saves the transaction to localStorage when all fields are filled', () => {
        render(<TransactionForm />);

        // Remplir les champs
        fireEvent.change(screen.getByPlaceholderText(/Nom de la transaction/i), {
            target: { value: 'Transaction 1' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Montant de la transaction/i), {
            target: { value: '100' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Description de la transaction/i), {
            target: { value: 'Description 1' },
        });

        // Mocking window.alert to prevent actual alert popup
        window.alert = jest.fn();

        // Simuler un clic sur le bouton
        const button = screen.getByText(/Effectuer la Transaction/i);
        fireEvent.click(button);

        // Vérifier si les valeurs sont bien enregistrées dans localStorage
        expect(localStorage.setItem).toHaveBeenCalledTimes(2); // Une pour le nombre de transactions et une pour les transactions
        expect(localStorage.setItem).toHaveBeenCalledWith('transaction_number', '1');
        expect(localStorage.setItem).toHaveBeenCalledWith('transactions', '1:name_Transaction 1_value_100_desc_Description 1-');

        // Vérifier si la page a été rechargée
        expect(window.location.reload).toHaveBeenCalled();
    });

    it('should reset the input fields after a successful submission', () => {
        render(<TransactionForm />);

        // Remplir les champs
        fireEvent.change(screen.getByPlaceholderText(/Nom de la transaction/i), {
            target: { value: 'Transaction 1' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Montant de la transaction/i), {
            target: { value: '100' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Description de la transaction/i), {
            target: { value: 'Description 1' },
        });

        // Mocking window.alert and window.location.reload
        window.alert = jest.fn();
        window.location.reload = jest.fn();

        // Simuler un clic sur le bouton
        const button = screen.getByText(/Effectuer la Transaction/i);
        fireEvent.click(button);

        // Vérifier si les champs sont réinitialisés
        expect(screen.getByPlaceholderText(/Nom de la transaction/i).value).toBe('');
        expect(screen.getByPlaceholderText(/Montant de la transaction/i).value).toBe('');
        expect(screen.getByPlaceholderText(/Description de la transaction/i).value).toBe('');
    });
});
