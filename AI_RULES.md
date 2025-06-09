# AI Rules for BaliFastboat Application

This document outlines the technical stack and guidelines for using libraries within the BaliFastboat application.

## Tech Stack Overview

*   **React**: The core JavaScript library for building user interfaces.
*   **TypeScript**: A superset of JavaScript that adds static typing, enhancing code quality and maintainability.
*   **Vite**: A fast build tool that provides a lightning-fast development experience.
*   **Tailwind CSS**: A utility-first CSS framework used for styling all components, enabling rapid UI development.
*   **React Router**: Used for client-side routing to manage navigation between different views and pages.
*   **shadcn/ui**: A collection of reusable components built with Radix UI and styled with Tailwind CSS.
*   **Radix UI**: A low-level UI component library providing unstyled, accessible components, often used as a foundation for shadcn/ui.
*   **Lucide React**: A library providing a set of beautiful and customizable SVG icons.

## Library Usage Rules

To maintain consistency, performance, and ease of development, please adhere to the following rules when using libraries:

*   **Styling (Tailwind CSS)**:
    *   **Always** use Tailwind CSS classes for all styling. Avoid writing custom CSS unless it's for global styles in `src/index.css` (e.g., scrollbar, base typography).
    *   Prioritize utility classes over custom components for simple styling needs.

*   **UI Components (shadcn/ui & Radix UI)**:
    *   **Prefer** using components from `shadcn/ui` for common UI elements (e.g., buttons, forms, dialogs, cards).
    *   **Do NOT** modify the source files of `shadcn/ui` components directly. If a component needs customization beyond its props, create a new component that wraps or extends the `shadcn/ui` component, or build a new component from scratch using Tailwind CSS.
    *   `Radix UI` components are primarily used internally by `shadcn/ui`. Only use `Radix UI` directly if `shadcn/ui` does not offer a suitable wrapper and a headless component is required for advanced accessibility or behavior.

*   **Icons (Lucide React)**:
    *   **Always** use icons from the `lucide-react` package.
    *   Ensure icons are appropriately sized and colored using Tailwind CSS classes.

*   **Routing (React Router)**:
    *   All client-side routing should be managed using `React Router`.
    *   Keep route definitions centralized, ideally within `src/App.tsx`.

*   **General Principles**:
    *   **Keep it simple and elegant**: Avoid over-engineering. Implement the minimum necessary changes to fulfill the request.
    *   **Component Granularity**: Create small, focused components (ideally under 100 lines of code). New components should always reside in new files within `src/components/`.
    *   **Type Safety**: Leverage TypeScript for all new and modified code to ensure type safety.
    *   **Responsiveness**: All designs should be responsive and work well across various screen sizes.
    *   **Accessibility**: Ensure all interactive elements are accessible (e.g., proper `aria-labels`, keyboard navigation).