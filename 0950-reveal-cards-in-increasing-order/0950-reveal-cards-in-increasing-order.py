class Solution:
    def deckRevealedIncreasing(self, deck: list[int]) -> list[int]:
        deck.sort()
        res = [0] * len(deck)  # 0 0 0 0 0 0 0
        queue = deque(range(len(deck)))  # 0 1 2 3 4 5 6

        for num in deck:
            i = queue.popleft()
            res[i] = num
            if queue:
                queue.append(queue.popleft())

        return res
