import Tag from 'types/Tag';

function tag(value: any): Tag {
  return Object.prototype.toString.call(value) as Tag;
}

export default tag;
