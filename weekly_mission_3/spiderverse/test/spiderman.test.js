const Spiderman = require("../app/spiderman");

describe("Unit Tests for Spiderman Class", () => {
    test('Create an spiderman object', () => {
      const andrewGarfield = new Spiderman("Sony 2nd Spidey",31,"Andrew Garfield",2,"Sony")

      expect(andrewGarfield.name).toBe("Sony 2nd Spidey");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
    });
  })

 
    test('Test method', () => {
      const tomHolland = new Spiderman("Sony and Marvel",25,"Tom Holland",5,"Sony-Marvel")

      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Sony-Marvel");
     
    });
  