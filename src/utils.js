const getInitials = (data) => {
  let name = data.name;
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  let initials = [...name.matchAll(rgx)] || [];

  return initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();
}

export default getInitials;