import {atom} from "recoil"
import {persistAtom} from "@/states/Persistence";

const NavigationSelection = atom<string | null>({
  key: "components/layout/navigation",
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export default NavigationSelection
