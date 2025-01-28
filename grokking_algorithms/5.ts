const voted = {};
const checkVoter = (name: string): string => {
  if (voted[name]) {
    return "kick them out!";
  } else {
    voted[name] = true;
    return "let them vote!";
  }
}

console.log("check Jane: ", checkVoter("Jane"));
console.log("check Mary: ", checkVoter("Mary"));
console.log("check Jane again: ", checkVoter("Jane"));

const cache = {};
const getPage = async(url: string): Promise<string> => {
  if (cache[url]) {
    return cache[url];
  } else {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const data: string = await response.json();
      cache[url] = data;
      return data;
    } catch (error) {
      return error.message;
    }    
  }
}