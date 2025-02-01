type Position = { x: number; y: number };
type Enemy = { position: Position };
type Unit = { 
  unitName: string;
  moveTo: (position: Position) => void 
};
type Structure = { 
  structureName: string;
  collect: () => void 
};

abstract class GameAI {
  turn(): void {
    this.collectResources()
    this.buildStructures()
    this.buildUnits()
    this.attack()
  }

  collectResources(): void {
    const structures = this.buildStructures();
    if (structures) {
      structures.forEach((structure) => structure.collect());
    }
  }

  abstract buildStructures(): Structure[] | void;
  abstract buildUnits(): Unit[] | void;

  attack(): void {
    const enemy = this.closestEnemy();

    if (enemy === null) {
      this.sendScouts({ x: 0, y: 0 });
    } else {
      this.sendWarriors(enemy.position);
    }
  }

  abstract sendScouts(position: Position): void;
  abstract sendWarriors(position: Position): void;

  protected closestEnemy(): Enemy | null {
    return null;
  }
}

class OrcsAI extends GameAI {
  private resources: number = 100;
  private scouts: Unit[] = [];
  private warriors: Unit[] = [];

  buildStructures(): Structure[] {
    const structures: Structure[] = [];
    if (this.resources) {
      const structure = this.build('farm');
      structures.push(structure);
    }
    return structures;
  }

  buildUnits(): Unit[] {
    const units: Unit[] = [];
    if (this.resources) {
      if (this.scouts.length) {
        const slave = this.createUnit('slave');
        units.push(slave);
      } else {
        const warrior = this.createUnit('warrior');
        units.push(warrior);
      }
    }
    return units;
  }

  sendScouts(position: Position) {
    if (this.scouts.length > 0) {
      this.scouts.forEach((scout) => scout.moveTo(position));
    }
  }

  sendWarriors(position: Position) {
    if (this.warriors.length > 5) {
      this.warriors.forEach((warrior) => warrior.moveTo(position));
    }
  }

  private build(type: string): Structure {
    return { 
      structureName: type,
      collect: () => console.log("Collecting resources") 
    } as Structure;
  }

  private createUnit(type: string): Unit {
    return { 
      unitName: type,
      moveTo: (position: Position) => console.log(`${type} moves to`, position) 
    } as Unit;
  }
}

class MonsterAI extends GameAI {
  collectResources(): void {
    console.log("Monsters can't collect resources.");
  }

  buildStructures(): void {
    console.log("Monsters can't build.");
  }

  buildUnits(): void {
    console.log("Monsters can't build.");
  }

  sendScouts(position: Position): void {
    console.log("Monsters can't send scouts.");
  }

  sendWarriors(position: Position): void {
    console.log(`Monsters attack at ${position.x}, ${position.y}`);
  }
}