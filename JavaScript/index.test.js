import {
  getSmallestNumberWithBuiltInObject,
  getSmallestNumberWithoutBuiltIn,
  calculateAverageToHundredthsDecimal,
  sortUsersByName,
  getUserByName,
  getUsersByCompany,
  mergeUsersES5,
  mergeUsersES6,
  mergeUserDataES5,
  mergeUserDataES6,
  createPromiseFromApiUrlWithThen,
  createPromiseFromApiUrlWithAsync,
  closureThatIncrementsInput,
  PersonCreate,
  URLCreator,
  factorial,
} from "./index";

describe("Test for an array of numbers", () => {
  const numbers = [2, 5, 22, 15, 11, 99];

  test("Get the smallest number with a built in Object", () => {
    expect(getSmallestNumberWithBuiltInObject(numbers)).toBe(2);
  });

  test("Get the smallest number without a built in Object", () => {
    expect(getSmallestNumberWithoutBuiltIn(numbers)).toBe(2);
  });

  test("Get the average of an array of integers", () => {
    const answer = (
      numbers.reduce((prev, curr) => prev + curr) / numbers.length
    ).toFixed(2);
    expect(calculateAverageToHundredthsDecimal(numbers)).toBe(answer);
  });
});

describe("Test for an array of objects", () => {
  const users = [
    {
      id: 2345,
      name: "Rey",
      company: "Livingly",
    },
    {
      id: 1342342,
      name: "Scott",
      company: "Livingly",
    },
    {
      id: 23324432,
      name: "Michael",
      company: "Livingly",
    },
    {
      id: 324324,
      name: "Jian",
      company: "CyberDVD",
    },
  ];

  test("Sort the users by name", () => {
    const testUsers = [...users];
    const mockUsers = [...users];
    const mockSortedUsers = mockUsers.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );

    expect(sortUsersByName(testUsers)).toEqual(
      expect.arrayContaining(mockSortedUsers)
    );
  });

  test("Get user by name", () => {
    const employees = [...users];
    const name = "Jian";
    const employee = employees.find((employee) => employee.name === name);

    expect(getUserByName(employees, name)).toBe(employee);
  });

  test("Get users by company", () => {
    const testUsers = [...users];
    const testCompany = "Livingly";
    const usersCopy = [...users];
    const usersByCompany = usersCopy.filter(
      (user) => user.company === testCompany
    );

    expect(getUsersByCompany(testUsers, testCompany)).toEqual(
      expect.arrayContaining(usersByCompany)
    );
  });
});

describe("es5 and es6 merging of arrays", () => {
  const livinglyUsers = [
    {
      id: 2345,
      firstName: "Rey",
      company: "Livingly",
    },
    {
      id: 1342342,
      firstName: "Scott",
      company: "Livingly",
    },
    {
      id: 23324432,
      firstName: "Michael",
      company: "Livingly",
    },
  ];

  const cyberDvdUsers = [
    {
      id: 324324,
      firstName: "Jian",
      company: "CyberDVD",
    },
  ];

  test("Merge two arrays using ES5 syntax", () => {
    const mockUsersMerged = livinglyUsers.concat(cyberDvdUsers);
    expect(mergeUsersES5(livinglyUsers, cyberDvdUsers)).toEqual(
      expect.arrayContaining(mockUsersMerged)
    );
  });

  test("Merge two arrays using ES6 syntax", () => {
    const mockUsersMerged = [...livinglyUsers, ...cyberDvdUsers];
    expect(mergeUsersES6(livinglyUsers, cyberDvdUsers)).toEqual(
      expect.arrayContaining(mockUsersMerged)
    );
  });
});

describe("es5 and es6 merging of objects", () => {
  const userData1 = {
    id: 2345,
    firstName: "Rey",
    company: "Livingly",
  };

  const userData2 = {
    id: 2345,
    lastName: "Arqueza",
    company: "Livingly",
  };

  test("Merge two objects with ES5 syntax", () => {
    const mockUserMerged = Object.assign(userData1, userData2);
    expect(mergeUserDataES5(userData1, userData2)).toEqual(mockUserMerged);
  });

  test("Merge two objects with ES6 syntax", () => {
    const mockUserMerged = { ...userData1, ...userData2 };
    expect(mergeUserDataES6(userData1, userData2)).toEqual(mockUserMerged);
  });
});

describe("Async test group", () => {
  /* test url returns the following json: */
  const dataJson = {
    posts: [
      {
        id: 1,
        title: "Post 1",
      },
      {
        id: 2,
        title: "Post 2",
      },
      {
        id: 3,
        title: "Post 3",
      },
    ],
    comments: [
      {
        id: 1,
        body: "some comment",
        postId: 1,
      },
      {
        id: 2,
        body: "some comment",
        postId: 1,
      },
    ],
    profile: {
      name: "typicode",
    },
  };
  const dataApi = "https://my-json-server.typicode.com/typicode/demo/db";

  test("test that promise =with then= returns correct data", () => {
    createPromiseFromApiUrlWithThen(dataApi).then((data) => {
      expect(data).toStrictEqual(dataJson);
    });
  });

  test("test that promise with async returns correct data", async () => {
    const data = await createPromiseFromApiUrlWithAsync(dataApi);
    expect(data).toStrictEqual(dataJson);
  });
});

describe("closures", () => {
  test("write a closure that increments the number passed in", () => {
    const testInput = 200;
    const mockedOutput1 = 201;
    const mockedOutput2 = 202;
    const closedFunction = closureThatIncrementsInput(testInput);

    expect(closedFunction()).toBe(mockedOutput1);
    expect(closedFunction()).toBe(mockedOutput2);
  });

  test("write a closure that behaves like user class with a private age method setAge", () => {
    const testAge1 = 52;
    const testAge2 = 53;
    const person = PersonCreate();
    person.setAge(testAge1);
    expect(person.getAge()).toBe(52);
    person.setAge(testAge2);
    expect(person.getAge()).toBe(53);
  });
});

describe("currying", () => {
  test("URL creator, the first call you pass the base url. Curry over the pagetype url.", () => {
    const testBaseUrl = "https://www.livingly.com";
    const testAboutPageUrl = "/about";
    const expectedAboutUrl = `${testBaseUrl}${testAboutPageUrl}`;
    const testContactPageUrl = "/contact";
    const expectedContactUrl = `${testBaseUrl}${testContactPageUrl}`;

    const basePage = URLCreator("https://www.livingly.com");
    const aboutPage = basePage("/about");
    const contactPage = basePage("/contact");
    const mediaPage = URLCreator("https://www.livinglymedia.com")("/signup");

    expect(aboutPage).toBe(expectedAboutUrl);
    expect(contactPage).toBe(expectedContactUrl);
    expect(mediaPage).toBe("https://www.livinglymedia.com/signup");
  });
});

describe("recursion", () => {
  test("factorial", () => {
    const testNum = 7;
    const expectedFactorial = 1 * 2 * 3 * 4 * 5 * 6 * 7;

    expect(factorial(testNum)).toBe(expectedFactorial);
  });
});
