import Stepper from "./Stepper";

describe("<Stepper>", () => {
  it("mounts", () => {
    cy.mount(<Stepper />);

    cy.contains(
      "label",
      'This is a custom label ~!@#$%^&*()_+=-[]{}|:",./?   UID'
    );
  });
});
