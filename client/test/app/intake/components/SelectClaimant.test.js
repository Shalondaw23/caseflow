import React from 'react';
import { axe } from 'jest-axe';
import { screen, render } from '@testing-library/react';

import COPY from 'app/../COPY';

import { SelectClaimant } from 'app/intake/components/SelectClaimant';

const defaultRelationships = [
  {
    value: 'CLAIMANT_WITH_PVA_AS_VSO',
    displayText: 'Bob Vance, Spouse',
    defaultPayeeCode: '10',
  },
  {
    value: '1129318238',
    displayText: 'Cathy Smith, Child',
    defaultPayeeCode: '11',
  },
];

describe('SelectClaimant', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setVeteranIsNotClaimant = jest.fn();

  const defaultProps = {
    formType: 'appeal',
    relationships: defaultRelationships,
    setVeteranIsNotClaimant
  };

  const setupDefault = (props = { ...defaultProps }) => {
    return render(<SelectClaimant {...props} />);
  };

  const setupDeceasedAppellants = (
    props = {
      toggled: false,
      formType: '',
    }
  ) => {
    return render(
      <SelectClaimant
        isVeteranDeceased
        relationships={defaultRelationships}
        formType={props.formType}
        veteranIsNotClaimant={props.veteranIsNotClaimant}
        setVeteranIsNotClaimant={setVeteranIsNotClaimant}
      />
    );
  };

  describe('with default value props', () => {
    it('renders correctly', () => {
      const { container } = setupDefault();

      expect(container).toMatchSnapshot();
    });

    it('passes a11y testing', async () => {
      const { container } = setupDefault();

      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with formType', () => {
    describe('appeal', () => {
      const formType = { formType: 'appeal' };
      const setupProps = { ...formType, toggled: true };

      describe('with deceased appellants', () => {
        const { container } = setupDeceasedAppellants(setupProps);

        it('renders correctly', () => {
          expect(container).toMatchSnapshot();
        });

        it('passes a11y testing', async () => {
          const results = await axe(container);

          expect(results).toHaveNoViolations();
        });

        it('disables different-claimant-option_false radio button and does NOT fire off setVeteranIsNotClaimant', () => {
          setupDeceasedAppellants(setupProps);

          const radioNo = screen.getByRole('radio', { name: /no/i });

          expect(radioNo).toBeEnabled();
          expect(setVeteranIsNotClaimant).toBeCalledTimes(0);
        });

        it('renders deceasedVeteranAlert', () => {
          setupDeceasedAppellants({ ...setupProps, veteranIsNotClaimant: false });

          const alert = screen.getByRole('alert');

          expect(alert).toBeInTheDocument();
        });
      });

      describe('claimant not found', () => {
        it('renders correctly', async () => {
          // Component only differs when veteranIsNotClaimant is set
          const veteranIsNotClaimant = true;
          const { container } = setupDefault({
            ...defaultProps,
            veteranIsNotClaimant,
          });

          // Ensure it's rendering the additional content
          expect(
            screen.queryByText(COPY.CLAIMANT_NOT_FOUND_START)
          ).not.toBeInTheDocument();
          expect(
            screen.queryByText(COPY.CLAIMANT_NOT_FOUND_END)
          ).not.toBeInTheDocument();

          expect(
            screen.queryByText(COPY.SELECT_CLAIMANT_LABEL)
          ).toBeInTheDocument();
          expect(
            screen.queryByRole('radio', { name: /claimant not listed/i })
          ).toBeInTheDocument();

          expect(container).toMatchSnapshot();
        });

        it('passes a11y testing', async () => {
          const { container } = setupDefault({ ...defaultProps });

          const results = await axe(container);

          expect(results).toHaveNoViolations();
        });
      });
    });

    describe('supplemental_claim', () => {
      it('renders correctly', async () => {
        const formType = 'supplemental_claim';
        const { container } = setupDefault({ ...defaultProps, formType, veteranIsNotClaimant: true });

        expect(
          screen.queryAllByText(COPY.CLAIMANT_NOT_FOUND_START, { exact: false })[0]
        ).toBeInTheDocument();
        expect(
          screen.queryAllByText(COPY.CLAIMANT_NOT_FOUND_END, { exact: false })[0]
        ).toBeInTheDocument();

        expect(container).toMatchSnapshot();
      });
    });

    describe('higher_level_review', () => {
      it('renders correctly', async () => {
        const formType = 'higher_level_review';
        const { container } = setupDefault({ ...defaultProps, formType, veteranIsNotClaimant: true });

        expect(
          screen.queryAllByText(COPY.CLAIMANT_NOT_FOUND_START, { exact: false })[0]
        ).toBeInTheDocument();
        expect(
          screen.queryAllByText(COPY.CLAIMANT_NOT_FOUND_END, { exact: false })[0]
        ).toBeInTheDocument();

        expect(container).toMatchSnapshot();
      });

      it('passes a11y testing', async () => {
        const formType = 'higher_level_review';
        const { container } = setupDefault({ ...defaultProps, formType, veteranIsNotClaimant: true });

        const results = await axe(container);

        expect(results).toHaveNoViolations();
      });
    });
  });

  describe("with formType not 'appeal'", () => {
    const setupProps = { toggled: true };

    it('disables different-claimant-option_false radio button & fires off setVeteranIsNotClaimant', () => {
      setupDeceasedAppellants(setupProps);

      const radioNo = screen.getByRole('radio', { name: /no/i });

      expect(radioNo).toBeDisabled();
      expect(setVeteranIsNotClaimant).toBeCalled();
    });
  });
});
