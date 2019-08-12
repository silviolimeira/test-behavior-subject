// Section 1
// These are our imports, which include importing various functions
//from ngrx store. We'll use these shortly.

import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Tutorial } from "./models/tutorial.model";
import { AddTutorial, RemoveTutorial } from "./actions/tutorial.actions";

// Section 2
// We create a state model. This could include additional properties
// based on your needs.

export class TutorialStateModel {
  tutorials: Tutorial[];
}

// Section 3
// We use the state decorator to define a name and default values based
// on the state model.
@State<TutorialStateModel>({
  name: "tutorials",
  defaults: {
    tutorials: []
  }
})
export class TutorialState {
  // Section 4
  // The @Selector() decorator allows you to create functions to return data,
  // or return specific results from your data. These allow you to reduce code
  // in your components and access them from multiple locations. In our example,
  // we're simply returning all of the tutorials, though, you could run a filter
  // on them to return only specific results.

  @Selector()
  static getTutorials(state: TutorialStateModel) {
    return state.tutorials;
  }

  // Section 5
  // We use the @Action() decorator to handle dispatched actions. We've defined 2
  // actions for adding a tutorial and removing one. Both actions include a
  // payload, as both require data in order to handle the action appropriately,
  // but payloads are not required.

  // You can use getState() to get the current state, setState() and patchState().
  // We're using patchState() instead of setState() as it helps reduce the necessary
  // code.

  @Action(AddTutorial)
  add(
    { getState, patchState }: StateContext<TutorialStateModel>,
    { payload }: AddTutorial
  ) {
    const state = getState();
    patchState({
      tutorials: [...state.tutorials, payload]
    });
  }

  @Action(RemoveTutorial)
  remove(
    { getState, patchState }: StateContext<TutorialStateModel>,
    { payload }: RemoveTutorial
  ) {
    patchState({
      tutorials: getState().tutorials.filter(a => a.name != payload)
    });
  }
}
