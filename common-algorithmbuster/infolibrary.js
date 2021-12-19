function getInfo(name) {
    switch (name) {
        case 'none':
            return ''
        case 'Selection-sort':
            return `<p>The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.<br>
             1) The subarray which is already sorted.<br>
             2) Remaining subarray which is unsorted.<br>
             In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.<br> 
             Source : GeekforGeeks</p>`
        case 'Merge-sort':
            return `Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See the following C implementation for details.<br>

            MergeSort(arr[], l,  r)<br>
            If r > l<br>
                 1. Find the middle point to divide the array into two halves:  <br>
                         middle m = l+ (r-l)/2<br>
                 2. Call mergeSort for first half:<br>
                         Call mergeSort(arr, l, m)<br>
                 3. Call mergeSort for second half:<br>
                         Call mergeSort(arr, m+1, r)<br>
                 4. Merge the two halves sorted in step 2 and 3:<br>
                         Call merge(arr, l, m, r)<br> 
             Source : GeekforGeeks</p>`
        case 'Bubble-sort':
            return `Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.<br>
            Example: <br>
            First Pass: <br>
            ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. <br>
            ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 <br>
            ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 <br>
            ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.<br>
            Second Pass: <br>
            ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) <br>
            ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 <br>
            ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
            ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) <br>
            Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.<br>
            Third Pass: <br>
            ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
            ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
            ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
            ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br> 
                 Source : GeekforGeeks</p>`
        case 'Insertion-sort':
            return `Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.<br>
            Algorithm <br>
            To sort an array of size n in ascending order: <br>
            1: Iterate from arr[1] to arr[n] over the array. <br>
            2: Compare the current element (key) to its predecessor.<br> 
            3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.<br> 
                     Source : GeekforGeeks</p>`
        case 'Quick-sort':
            return `Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.<br> 
            Always pick first element as pivot.<br>
            Always pick last element as pivot.<br>
            Pick a random element as pivot.<br>
            Pick median as pivot.<br>
            The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.<br>
            Source : GeekforGeeks</p>`
        case 'Heap-sort':
            return `<p>Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.<br>
            What is Binary Heap? <br>
            Let us first define a Complete Binary Tree. A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible (Source Wikipedia)<br>
            A Binary Heap is a Complete Binary Tree where items are stored in a special order such that the value in a parent node is greater(or smaller) than the values in its two children nodes. The former is called max heap and the latter is called min-heap. The heap can be represented by a binary tree or array.<br>
            
            Why array based representation for Binary Heap? <br>
            Since a Binary Heap is a Complete Binary Tree, it can be easily represented as an array and the array-based representation is space-efficient. If the parent node is stored at index I, the left child can be calculated by 2 * I + 1 and the right child by 2 * I + 2 (assuming the indexing starts at 0).<br>
            
            Heap Sort Algorithm for sorting in increasing order: <br>
            1. Build a max heap from the input data. <br>
            2. At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of the tree. <br>
            3. Repeat step 2 while the size of the heap is greater than 1.<br>
            
            How to build the heap? <br>
            Heapify procedure can be applied to a node only if its children nodes are heapified. So the heapification must be performed in the bottom-up order.<br>
            Source : GeekforGeeks</p>`
        case 'BFS':
            return `Breadth-First Traversal (or Search) for a graph is similar to Breadth-First Traversal of a tree (See method 2 of this post).<br>
            The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again.<br>
            To avoid processing a node more than once, we use a boolean visited array. <br>
            For simplicity, it is assumed that all vertices are reachable from the starting vertex. <br>`
        case 'DFS':
            return `Depth First Traversal (or Search) for a graph is similar to Depth First Traversal of a tree.<br>
            The only catch here is, unlike trees, graphs may contain cycles (a node may be visited twice). <br>
            To avoid processing a node more than once, use a boolean visited array. `
        case 'Dijkstra':
            return `Given a graph and a source vertex in the graph, find the shortest paths from the source to all vertices in the given graph.<br>
        Dijkstra’s algorithm is very similar to Prim’s algorithm for minimum spanning tree. Like Prim’s MST, we generate a SPT (shortest path tree) with a given source as a root.<br>
         We maintain two sets, one set contains vertices included in the shortest-path tree, other set includes vertices not yet included in the shortest-path tree. At every step of the algorithm, we find a vertex that is in the other set (set of not yet included) and has a minimum distance from the source.<br>
        Below are the detailed steps used in Dijkstra’s algorithm to find the shortest path from a single source vertex to all other vertices in the given graph. <br>
        
        Algorithm 
        1) Create a set sptSet (shortest path tree set) that keeps track of vertices included in the shortest-path tree, i.e., whose minimum distance from the source is calculated and finalized. Initially, this set is empty. <br>
        2) Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first. <br>
        3) While sptSet doesn’t include all vertices <br>
        ….a) Pick a vertex u which is not there in sptSet and has a minimum distance value. <br>
        ….b) Include u to sptSet. <br>
        ….c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if the sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v. `
    }
}