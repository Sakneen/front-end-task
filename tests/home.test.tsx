import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '../pages';

describe('home', () => {
  it('should be a button for going to dashboard', () => {
    render(<Home />);
    const goToDashboardBtn = within(
      screen.getByText('Go to Dashboard', { ignore: true })
    );

    expect(goToDashboardBtn).toBeDefined();
  });
});
