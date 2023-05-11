class Graph{
    constructor(){
        //storing in the list
        this.list={};
    }
    insertVertex(vertex){
        if(!this.list[vertex]){
            //if this does not already exists then add new one and give its value new Array
            this.list[vertex] = [];
        }
        return this;
    }
    insertEdege(vertex1,vertex2){
        //Edge means connections
        //why are we using lis an not adjacnt list because it has constant tme for inserting and deleting and can not serach in the constant time, searching is the
        if(!this.list[vertex1] || !this.list[vertex2]){
            return undefined;
        }
        this.list[vertex1].push(vertex2)
        this.list[vertex2].push(vertex1)
        return this;
    }
    removeEdge(vertex1,vertex2){
        //we want to remove the connectiion between the 
        if (!this.list[vertex1] || !this.list[vertex2]) return undefined;
        let newVertex = this.list[vertex1].filter(vertex=>vertex!==vertex2);
        this.list[vertex1] = newVertex;

        let newVertexNext = this.list[vertex2].filter(vertex=>vertex!==vertex1);
        this.list[vertex2] = newVertexNext;
        return this;
    }
    removeVertex(vertex){
        //Now since connection for the vertex are stored inside its particular array then we need to pop one by one and then find the that particular vertex and remove the searched vertex
        while(this.list[vertex].length){
            let lastItem = this.list[vertex].pop();
            this.removeEdge(lastItem,vertex);
        }
        delete this.list[vertex]
        return this;
    }
    dfs(start){
        let result =[];
        let check  ={};
        var list = this.list;
        //use stack
        let stack =[start]
        //check[start] = true;
        while(stack.length){
            let lastneighbor = stack.pop();
            result.push(lastneighbor);
            check[lastneighbor] =true;
            list[lastneighbor].forEach(neighbor => {
                if(!check[neighbor]){
                    stack.push(neighbor);
                    check[neighbor] = true
                }
            })
        }
        return result;
    }
    dfsRecursive(start){
        let result = [];
        let check = {};
        let list = this.list;
        (function helper(vertex){
            if(!vertex) return null
            check[vertex]=true;
            result.push(vertex);
            list[vertex].forEach(neighbor=> {
                if(!check[neighbor]){
                   return helper(neighbor)
                }
            })
        })(start)
        return result
    }
    bfs(start){
        let result=[];
        let check={};
        let queue = [start];
        check[start] = true;
        var list = this.list;
        while(queue.length){
            let vertex  = queue.shift();
            result.push(vertex)
            check[vertex] = true;
            list[vertex].forEach(neighbor=>{
            if(!check[neighbor]){
                queue.push(neighbor);
        }
           })
        }
        return result;
    }
}
let graph = new Graph();
graph.insertVertex("Ankit")
graph.insertVertex("Arjun")
graph.insertVertex("Riya")
console.log(graph.insertVertex("Nitin"))
console.log(graph.insertEdege("Ankit", "Riya"))
console.log(graph.insertEdege("Arjun", "Riya"))
console.log(graph.bfs("Ankit"))
