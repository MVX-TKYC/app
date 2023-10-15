# TKYC Website 

## Where can I find the site?

We currently have a [development site](https://tkyc-frontend.onrender.com/). We set it up to allow everyone to check the project without the technical knowledge to build it.

# Development guide
## How to start the website locally?

First, install the required modules,
```
npm install
```

Then start the live server
```
npm run start
```
# Home Component

This is a TypeScript React component file called `Home.tsx`. It serves as the home page of a web application.

## Dependencies and Imports

- **React**: The core React library.
- **@multiversx/sdk-dapp Hooks**: Various hooks from the `@multiversx/sdk-dapp` package for managing user accounts and web wallet login.
- **Button Component**: The `Button` component from the local project, used for the "Connect my wallet" button.
- **CSS Styles**: The CSS styles for this component are imported from `home.scss`.
- **useNavigate Hook**: The `useNavigate` hook from 'react-router-dom' is used for programmatic navigation.

## Component Overview

The `Home` component is defined as a functional component.

Inside the component, it utilizes various hooks and functions:

- `useWebWalletLogin`: This hook is used to initiate web wallet login with a callback route of "/".
- `useGetAccount`: It is used to obtain the user's wallet address.
- `isConnected`: This is a boolean variable that checks if a wallet address is present, indicating whether the user is connected.
- `navigate`: The `navigate` function is used to navigate to the '/profile' route when the user is connected.

## Component Structure

The component's main content is contained within a `div` with the ID 'body-container' and class 'home'. It includes:

- A title, "Discover Your MultiversX Profile."
- A description of "TKYC (Truly Know Your Customer)" and its capabilities.
- A link for more information about TKYC.
- The "Connect my wallet" button, which triggers the `connectWallet` function when clicked.

## Connecting the Wallet

The `connectWallet` function calls `initiateLogin`, which initiates the web wallet login process.

# Profile Component

This TypeScript React component, `Profile.tsx`, represents the user's profile page in your web application.

## Dependencies and Imports

- **React**: The core React library.
- **ReactSVG**: A component for rendering SVG images.
- **Images**: Icons and images used in the component.
- **@multiversx/sdk-dapp/utils**: The `logout` function for user logout.
- **Loading**: A component for displaying loading state.
- **RadarChart**: A custom component for rendering a radar chart.
- **@multiversx/sdk-dapp/hooks/account/useGetAccount**: A hook to retrieve the user's account information.
- **@itheum/sdk-mx-data-nft/SftMinter**: A component from 'itheum/sdk-mx-data-nft' for minting DataNFTs.
- **Address**: A component from '@multiversx/sdk-core' for representing Ethereum addresses.

## Component Functionality

- The component initializes various functions and state variables.
  - `fetchProfile`: A function (currently not implemented) to fetch the user's profile data.
  - `getNewProfile`: A function to log the user out and return to the home page.
  - `mintWithItheum`: A function to initiate the minting of DataNFT with Itheum.
  - `generateXUrl`: A function to generate a URL for sharing the user's profile on social media.
  - `profile` and `profileImage`: State variables for holding user profile data and profile image URLs.
  - `loading`: A state variable indicating whether the component is still loading data.

- The `useEffect` hook is used to fetch the user's profile data when the component mounts.

- If the component is still loading, it displays a loading indicator using the `Loading` component.

- Once the profile data is loaded, the component renders the following information:
  - User profile title and Ethereum address.
  - A profile picture, currently set to a temporary image (TODO: Replace with a real image).
  - A button to share the profile on a social media platform.
  - Components for minting DataNFTs with Itheum and displaying a radar chart.

- A button allows users to get a new profile, which logs them out and returns to the home page.

# Loading Component

The `Loading.tsx` file contains a TypeScript React component called `Loading`. This component is responsible for displaying a loading animation with simulated transaction data during the initial loading of a page. It is often used to provide feedback to users that the application is working on a task.

## Component Overview

The `Loading` component features the following functionality:

- It maintains a list of simulated transaction data items, initially empty.
- It utilizes a `useEffect` hook to initiate a loop of adding and removing transactions at specific intervals.
- The component's primary purpose is to provide a visual loading animation with animated transaction elements.

## Simulated Transactions

- The `addTransaction` function adds simulated transaction data to the list of transactions. It includes the transaction's position on the screen (x and y coordinates) and a unique identifier.
- The `removeTransaction` function deletes a transaction from the list when the transaction is completed or removed.

## Rendering

The `Loading` component renders the following elements:

- A central circle representing the loading progress.
- An information text indicating that the AI is analyzing the user's profile.
- A dynamic list of animated transaction elements, each with its unique transaction data.

## Transaction Element

- The `TransactionElement` component is used to render individual transaction elements. Each element represents a simulated transaction.
- It generates a random transaction text with a "Transaction Hash."
- The element starts an animation when it's rendered, with transitions for positioning, scaling, and opacity.
- Upon completion of the animation, the transaction element is removed from the list.
