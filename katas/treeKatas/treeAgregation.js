import _ from 'lodash';
import { mkdir, mkfile, getChildren, isFile, getName } from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc'),
    mkfile('consul.cfg'),
  ]),
  mkfile('hexletrc'),
  mkdir('bin', [
    mkfile('ls'),
    mkfile('cat'),
  ]),
]);

const getNodesCount = (tree) => {
  if (isFile(tree)) {
    return 1;
  }
  const children = getChildren(tree);
  const descendantCounts = children.map((child) => getNodesCount(child));
  return 1 + _.sum(descendantCounts);
};

export { getNodesCount };
console.log(getNodesCount(tree));

