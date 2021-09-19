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
    }
}