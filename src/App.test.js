import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Dashboard from './Dashboard/Dashboard';

test('toggles the mobile navigation menu', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<Dashboard />);
  });

  const toggleButton = container.querySelector('.mobile-menu-toggle');
  const mobileNav = container.querySelector('.mobile-nav');

  expect(mobileNav.getAttribute('data-open')).toBe('false');

  act(() => {
    toggleButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(mobileNav.getAttribute('data-open')).toBe('true');
  expect(toggleButton.getAttribute('aria-expanded')).toBe('true');

  act(() => {
    root.unmount();
  });
  container.remove();
});
