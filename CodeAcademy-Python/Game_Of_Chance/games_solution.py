import random

money = 100

#Write your game of chance functions here
def coin_flip(call, bet):
  num = random.randint(1, 2)
  flip = ''
  if num == 1:
    flip += 'Heads'
  else:
    flip += 'Tails'
  
  if call == flip:
    return bet
  else:
    return bet * -1

def cho_han(guess, bet):
  die1 = random.randint(1, 6)
  die2 = random.randint(1, 6)
  sum = die1 + die2
  result = ''
  if sum % 2 == 0:
    result += 'Even'
  else:
    result += 'Odd'
    
  if guess == result:
    return bet
  else:
    return bet * -1

def cardPick(bet):
  card1 = random.randint(1, 13)
  card2 = random.randint(1, 13)
  if card1 > card2:
    return bet
  elif card2 > card1:
    return bet * -1
  else:
    return 0

def roulette(guess, bet):
  result = random.randint(0, 37)

  if guess == "Even" and result % 2 == 0 and result != 0:
    return bet
  elif guess == "Odd" and result % 2 == 1 and result != 37:
    return bet
  elif guess == result:
    return bet * 35
  else:
    return -bet
  
money += coin_flip("Heads", 10)
money += cardPick(5)
money += cho_han("Even", 2)
money += roulette("Even", 10)
money += roulette(3, 1)
money += roulette("Odd", money)
print("Your total amount of money is " + str(money))
