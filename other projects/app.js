const value = [
  {
    id: 1,
    label: "buy flowers to my girls",
    date: "2020-03-11",
    done: true
  },
  {
    id: 2,
    label: "clean the garage",
    date: "2020-03-17",
    done: false
  },
  {
    id: 3,
    label: "do the shopping",
    date: "2020-03-10",
    done: true
  },
  {
    id: 4,
    label: "fix the motorcycle",
    date: "2020-03-20",
    done: false
  },
  {
    id: 5,
    label: "fix the washing machine",
    date: "2020-03-11",
    done: false
  },
  {
    id: 6,
    label: "buy a birthsday gift",
    date: "2020-03-12",
    done: false
  },
  {
    id: 7,
    label: "do the homework",
    date: "2020-03-14",
    done: false
  },
  {
    id: 8,
    label: "help my mother",
    date: "2020-03-12",
    done: false
  },
  {
    id: 9,
    label: "buy few beers",
    date: "2020-03-09",
    done: false
  },
  {
    id: 10,
    label: "pay the bills",
    date: "2020-03-12",
    done: true
  },
  {
    id: 11,
    label: "fix a bug ;)",
    date: "2020-03-16",
    done: false
  },
  {
    id: 12,
    label: "clean the car outside and inside!",
    date: "2020-04-01",
    done: false
  }
];

function transform(value, arg) {
  function formatDate() {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  let filteredDates = [];
  if (arg === "isLate") {
    filteredDates = value.filter(
      task => new Date(task.date) < new Date(formatDate())
    );
  } else if (arg === "isToday") {
    filteredDates = value.filter(task => task.date == formatDate());
  } else if (arg === "isFuture") {
    filteredDates = value.filter(
      task => new Date(task.date) > new Date(formatDate())
    );
  }
  return filteredDates;
}

transform(value, "isToday");
