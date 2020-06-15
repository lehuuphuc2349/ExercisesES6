const getURL = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (acc, value) => (
      (acc[value.slice(0, value.indexOf("="))] =
        acc[value.slice(value.indexOf("=") + 1)]),
      acc
    )
  );
console.log(getURL("facebook.com/name=phucdeptrai="));
