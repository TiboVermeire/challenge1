import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import BookTile from './components/books';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flex}> 
        <Text style={styles.header1}>Bookshop</Text>
        <View>
          <Image style={styles.imgShoppingCart} source={require('../challenge/assets/shopping-cart.png')}/>
          <Text style={styles.amount}>1</Text>
        </View>
      </View>
      <View style={styles.tilesContainer}>
        <BookTile title="Book title 1" author="By Some Random dude" shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex." isbn="ISBN 978-8-2165-1860-1"/>
        <BookTile title="Book title 2" author="By Some Other dude" shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex." isbn="ISBN 978-2-1425-4277-8"/>
        <BookTile title="Book title 3" author="By Jane Doe" shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex." isbn="ISBN 978-5-9684-0436-7"/>
        <BookTile title="Book title 4" author="By John Doe" shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex." isbn="ISBN 978-8-3356-4834-0"/>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
    //

  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 36,
    fontWeight: '800',
    },
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imgShoppingCart: {
    marginTop: 10,
    marginRight: 5,
    height: 25,
    width: 25,
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    paddingLeft: 25,
  },
});
