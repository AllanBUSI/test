import random

def creer_binomes(liste):
    binomes = []
    taille = len(liste)
    
    # Mélanger le tableau aléatoirement
    random.shuffle(liste)

    for i in range(0, taille - 1, 2):
        binomes.append([liste[i], liste[i+1]])

    if taille % 2 == 1:
        binomes[-1].append(liste[-1])

    return binomes

liste = [1, 2, 3, 4, 5, 6, 7]
binomes = creer_binomes(liste)
print(binomes)
