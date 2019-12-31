import { SearchKey } from "../lib/index";

class Example {
  public obj: any = { a: 1 };

  @SearchKey({ a: "name_like_or_unitName_like" })
  setSearchKey(obj: object, sec: any) {
    console.log("obj", obj);
    console.log("sec", sec);
  }
}

const example = new Example();

example.setSearchKey({ a: 1, "b@": 2, c: 3 }, [123]);
