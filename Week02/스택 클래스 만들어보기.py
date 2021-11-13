from typing import Any
from collections import deque

class FixedStack:
    class Empty(Exception):
        pass
    class Full(Exception):
        pass
    def __init__(self, capacity : int) -> None:
        self.stk = [None] * capacity
        self.capacity = capacity
        self.ptr = 0
    def len(self) -> int:
        return self.ptr
    def is_empty(self) -> bool:
        return self.ptr <=0
    def is_full(self) -> bool:
        return self.ptr == self.capacity
    def push(self,value : Any) -> None:
        if self.is_full:
            raise FixedStack.Full
        self.stk[self.ptr] = value
        self.ptr += 1
    def pop(self) -> Any:
        if self.Empty:
            raise FixedStack.Empty
        self.ptr -= 1
        return self.stk[self.ptr]
    def peek(self) -> Any:
        return self.stk[self.ptr-1]
    def clear(self) -> None:
        self.ptr = 0
    def find(self, value : Any) -> Any:
        for i in range(self.ptr,-1,-1):
            if self.stk[i] == value:
                return i
        return -1
    def count(self,value : Any) -> Any:
        cnt = 0
        for i in range(self.ptr,-1,-1):
            if self.stk[i] == value:
                cnt += 1
        return cnt
    def __contains__(self,value : Any) -> bool:
        return self.count(value) > 0
    def dump(self) -> None:
        if self.is_empty():
            print('스택이 비어있습니다.')
        else:
            print(self.ptr[:self.ptr])