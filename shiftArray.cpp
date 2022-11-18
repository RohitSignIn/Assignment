// Performing Left and Right Circular Shift
#include<iostream>
using namespace std; 

void shiftArray(int arr[], int N, int p, int d){
    int temp;

    while (p != 0)
    {
        if(d == 0)
        { 
        // Left Circular Shift
            temp = arr[0];
            for(int i=0; i<N; i++){
                arr[i] = arr[i+1];
            }
            arr[N-1] = temp;
            p--;
        }
        else
        { 
        // Right Circular Shift
            temp = arr[N-1];
            for(int i=N-1; i>0; i--){
                arr[i] = arr[i-1];
            }
            arr[0] = temp;
            p--;
        }
    }

    cout<<"\nResultant Array After Shift Operation: ";
    for(int i=0; i<N; i++){
        cout<<arr[i];
    };
}

struct // Declaring structure needed for left and right circular shift
{
    int N, p, d;
    // N -> Size of Array
    // p -> Position to shift
    // d -> Direction 0 to left and 1 to right
} shiftStruct;

int main(){

    cout<<"\nEnter Array Size: ";
    cin>>shiftStruct.N;

    // Declaring Array of size n
    int arr[shiftStruct.N];

    cout<<"\nEnter Array\n";

    for(int i=0; i<shiftStruct.N; i++){
        cin>>arr[i];
    }

    cout<<"\nShift by Position: ";
    cin>>shiftStruct.p;

    cout<<"\nDirection, 0 for Left shift and 1 for Right shift: ";
    cin>>shiftStruct.d;

    shiftArray(arr, shiftStruct.N, shiftStruct.p, shiftStruct.d);
    return 0;
}