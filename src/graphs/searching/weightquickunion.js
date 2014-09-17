/**
 * Checks whether there is a path between two nodes
 * Complexity of the initialization O(n).
 *
 * @constructor
 * @param {number} n The nodes count
 */
function QuickUnion(n) {
  this._ids = [];
  this._size = [];
  for (var i = 0; i < n; i += 1) {
    this._ids[i] = i;
    this._size[i] = 1;
  }
}

/**
 * Finds the root of given node.
 * The complexity is around O(logn)
 *
 * @param {number} i The given node
 * @return {number} The root of the node
 */
QuickUnion.prototype._root = function (i) {
  while (i !== this._ids[i]) {
//    this._ids = this._ids[this._ids[i]]; //enables the path compression
    i = this._ids[i];
  }
  return i;
};

/**
 * Checks whether two nodes are connected.
 * Complexity O(logn)
 *
 * @param {number} p The first node
 * @param {number} q The second node
 * @return {boolean} True/false depending on whether the nodes are connected
 */
QuickUnion.prototype.connected = function (p, q) {
  return this._root(p) === this._root(q);
};

/**
 * Unions two nodes.
 * Complexity O(logn)
 *
 * @param {number} p The first node
 * @param {number} q The second node
 */
QuickUnion.prototype.union = function (p, q) {
  var pf = this._root(p);
  var qf = this._root(q);
  if (pf == qf) return; // already linked
  var psz = this._size[qf];
  var qsz = this._size[pf];
  if (psz < qsz) {
    this._ids[pf] = qf;
    this._size[qf] += psz;
  } else {
    this._ids[qf] = pf;
    this._size[pf] += qsz;
  }
};

//0-5 3-4 4-7 4-9 6-2 8-9 5-6 9-6 1-2
var q = new QuickUnion(10);
q.union(4, 8);
q.union(4, 7);
q.union(1, 8);
q.union(0, 1);
q.union(0, 5);
q.union(9, 4);
console.log(q._ids);
//console.log(union.connected(0, 9)); //expected false
//console.log(union.connected(3, 9)); //expected true

5
6
3
7
3