/**
 * src/reducers/flattenContent.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

/* eslint no-param-reassign: ["error", { "props": false }] */

let uid;
const flattenLevel = (content, parentId) => {
  let flatContent = [];
  content.forEach((item) => {
    const id = item.id || uid;
    uid += 1;

    flatContent.push({
      id,
      parentId: item.parentId || parentId,
      icon: item.icon,
      label: item.label,
      to: item.to,
      externalLink: item.externalLink,
      active: false,
      hasActiveChild: false,
      subMenuVisibility: false,
    });
    if (typeof item.content !== 'undefined') {
      flatContent = [
        ...flatContent,
        ...flattenLevel(item.content, id),
      ];
    }
  });
  return flatContent;
};

let trace;
const mapTrace = (content, parentId) => {
  const subItems = content.filter(item => item.parentId === parentId);
  subItems.forEach((item) => {
    item.trace = [...trace];
    trace.push(item.id);
    item.hasSubMenu = mapTrace(content, item.id);
    if (item.hasSubMenu) {
      item.to = '#';
    }
    trace.pop();
  });
  return subItems.length > 0;
};

export default (content) => {
  uid = 1;
  trace = [];
  const flatContent = flattenLevel(content);
  mapTrace(flatContent);
  return flatContent;
};
