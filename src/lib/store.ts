import { atom } from "jotai";

export const stepStatesAtom = atom({
  1: true,
  2: false,
  3: false,
});

export const displayStepAtom = atom([
  {
    Name: "",
    stepid: 1,
    status: true,
  },
  {
    Name: "",
    stepid: 2,
    status: false,
  },
  {
    Name: "",
    stepid: 3,
    status: false,
  },
]);

export const SignAtom = atom("signup");

export const UserAtom = atom({
  firstName: null,
  token: null,
});

export const AtomUser=atom(null);

export const progressAtom = atom(0);
