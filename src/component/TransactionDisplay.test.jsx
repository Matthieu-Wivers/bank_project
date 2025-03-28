import { render, screen, waitFor } from '@testing-library/react';
import TransationDisplay from './TransationDisplay';

// Mock localStorage
beforeEach(() => {
  // Clear localStorage before each test to ensure no persistence issues
    localStorage.clear();
});

describe('TransationDisplay', () => {
    it('should render a table with transactions if they exist in localStorage', async () => {
    // On simule un ensemble de transactions dans localStorage
    const mockTransactions = '1:name_Transaction 1_value_100_desc_Description 1-2:name_Transaction 2_value_200_desc_Description 2-';
    localStorage.setItem('transactions', mockTransactions);

    render(<TransationDisplay />);

    // Vérification que le tableau est bien affiché
    await waitFor(() => {
        expect(screen.getByText('Transaction 1')).toBeInTheDocument();
        expect(screen.getByText('Transaction 2')).toBeInTheDocument();
        expect(screen.getByText('100€')).toBeInTheDocument();
        expect(screen.getByText('200€')).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();
        expect(screen.getByText('Description 2')).toBeInTheDocument();
    });
});

it('should render an empty table when no transactions are stored in localStorage', () => {
    // S'assurer qu'aucune transaction n'est stockée dans localStorage
    localStorage.setItem('transactions', '');

    render(<TransationDisplay />);

    // Vérification que le tableau est vide
    expect(screen.queryByText('Transaction')).not.toBeInTheDocument();
});

it('should render a message if there are no transactions in localStorage', async () => {
    // On s'assure qu'il n'y a pas de transactions dans localStorage
    localStorage.setItem('transactions', '');

    render(<TransationDisplay />);

    // Vérification que la table est vide et un message d'absence de transactions est affiché
    await waitFor(() => {
        expect(screen.getByText('Aucune transaction à afficher')).toBeInTheDocument();
    });
    });
});
