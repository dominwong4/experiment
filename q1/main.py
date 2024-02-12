sample_graph = {
    "A": ["B", "D", "H"],
    "B": ["A", "C", "D"],
    "C": ["B", "D","F"],
    "D": ["A", "B", "C", "E"],
    "E": ["D", "F","H"],
    "F": ["C", "E", "G"],
    "G": ["F", "H"],
    "H": ["E", "G"]
}

def find_all_possible_paths(graph, start, end, path=[]):
    path = path + [start] #first run will be ["A"]
    if start == end:
        return [path]
    paths = []
    for node in graph[start]: #get this all connected Nodes, in first run B, D ,H
        if node not in path: # make sure not repeating travel
            new_paths = find_all_possible_paths(graph, node, end, path)# then passing B,H,["A"] / D,H,["A"] / H,["A"] and so on
            for new_path in new_paths:
                paths.append(new_path)
    return paths

def find_shortest_path(graph, start, end, path=[]):
    path = path + [start]
    if start == end:
        return path
    shortest = None
    for node in graph[start]:
        if node not in path:
            new_path = find_shortest_path(graph, node, end, path)
            if new_path:
                if not shortest or len(new_path) < len(shortest):
                    shortest = new_path
    return shortest

def __main__():
    print(find_all_possible_paths(sample_graph, "A", "H"))
    print(find_shortest_path(sample_graph, "A", "H"))



if __name__ == "__main__":
    __main__()