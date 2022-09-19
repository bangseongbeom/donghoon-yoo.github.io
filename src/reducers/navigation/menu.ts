type NavigationMenuState =
  | {
      type: "OPEN_NAVMENU";
      isOpen: true;
    }
  | {
      type: "CLOSE_NAVMENU";
      isOpen: false;
    };

export const openMenu: NavigationMenuState = {
  type: "OPEN_NAVMENU",
  isOpen: true,
};

export const closeMenu: NavigationMenuState = {
  type: "CLOSE_NAVMENU",
  isOpen: false,
};

export const initialState: NavigationMenuState = { ...closeMenu };

const reducer = (state = initialState, newState: NavigationMenuState) => ({
  ...state,
  ...newState,
});

export default reducer;
