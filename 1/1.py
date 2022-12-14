def part1(nums):
	elves = {}
	elf_idx = 0
	cur_elf = f'elf {elf_idx}'
	for i in range(0, len(nums)):
		if nums[i] == "":
			elf_idx += 1
			cur_elf = f'elf {elf_idx}' 
		elif cur_elf in elves:
			elves[cur_elf] += int(nums[i])
		else:
			elves[cur_elf] = int(nums[i])
	max_elf = None 
	for elf in elves:
		if max_elf == None or elves[elf] > elves[max_elf]:
			max_elf = elf
	return elves

def part2(elves):
	print(sum(sorted(list(elves.values()))[-3:]))

if __name__ == "__main__":
	nums = [x.replace("\n", "") for x in open("input.txt", "r").readlines()]
	elves =	part1(nums)
	part2(elves)
