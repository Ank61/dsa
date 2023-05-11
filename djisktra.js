class priorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority })
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}
class WeightedGraph {
    constructor() {
        this.list = [];
    }
    //for the wighted graph
    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = []
        }
        return this
    }
    addEdge(vertex1, vertex2, edge) {
        this.list[vertex1].push({ vertex: vertex2, weight: edge })
        this.list[vertex2].push({ vertex: vertex1, weight: edge })
        return this;
    }
    Dijkstra(start, finish) {
        const node = new priorityQueue();
        const distance = {};
        const previous = {};
        let path = [];
        let smallest;
        //build up the intial state
        for (let vertex in this.list) {
            if (vertex === start) {
                distance[vertex] = 0;
                //giving priority queue the priority and the vertex
                node.enqueue(vertex, 0);
            }
            else {
                distance[vertex] = Infinity;
                node.enqueue(vertex, Infinity);
            }
            //this is shorttest path finder
            previous[vertex] = null;
        }
        //as long as we have somehting to visi in the priority queue
        while (node.values.length) {
            //we will take the current samllest value
            smallest = node.dequeue().val;
            if (smallest === finish) {
                //we are done 
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distance[smallest] !== Infinity) {
                //loop through each neighbor 
                for (let neighbor in this.list[smallest]) {
                    //find neighbor node
                    let neighborNode = this.list[smallest][neighbor];
                    console.log(neighbor)
                    //Calculate distance 
                    let candidate = distance[smallest] + neighborNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distance[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distance[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        node.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");